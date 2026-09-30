import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },  // Ramp-up to 20 virtual users
    { duration: '1m',  target: 50 },  // Steady load to test canary split & Grafana panel
    { duration: '30s', target: 0 },   // Ramp-down
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],    // Error rate under 1%
    http_req_duration: ['p(95)<500'], // 95% of requests must complete < 500ms
  },
};

export default function () {
  // Replace with backend-service or frontend-service internal K8s DNS or Minikube IP
  const res = http.get('http://frontend-service.default.svc.cluster.local');
  
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(0.5);
}