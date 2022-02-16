apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ${NAME}-ingress
  annotations:
    nginx.ignress.kubernetes.io/rewrite-target: /
spec:
  defaultBackend:
    service:
      name: ${NAME}-service
      port:
        number: 00