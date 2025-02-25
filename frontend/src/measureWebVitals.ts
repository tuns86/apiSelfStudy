import { onCLS, onINP, onLCP, onTTFB } from 'web-vitals';

function sendToAnalytics(metric: any) {
  // Gửi các chỉ số hiệu suất đến hệ thống phân tích của bạn
  console.log(metric);
}

onCLS(sendToAnalytics);
onLCP(sendToAnalytics);
onTTFB(sendToAnalytics);
onINP(sendToAnalytics);
