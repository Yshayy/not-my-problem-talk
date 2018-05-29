#
# minikube start     --extra-config=controller-manager.cluster-signing-cert-file="/var/lib/localkube/certs/ca.crt"     --extra-config=controller-manager.cluster-signing-key-file="/var/lib/localkube/certs/ca.key"     --extra-config=apiserver.admission-control="NamespaceLifecycle,LimitRanger,ServiceAccount,PersistentVolumeLabel,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota"     --kubernetes-version=v1.10.0 --vm-driver=kvm2 --memory=8192
# curl -L https://git.io/getLatestIstio | sh -
# 


# install istio from docs
# kubectl apply -f install/kubernetes/istio.yaml
# ./install/kubernetes/webhook-create-signed-cert.sh \
#    --service istio-sidecar-injector \
#    --namespace istio-system \
#    --secret sidecar-injector-certs

# kubectl apply -f install/kubernetes/istio-sidecar-injector-configmap-release.yaml

# cat install/kubernetes/istio-sidecar-injector.yaml | \
# ./install/kubernetes/webhook-patch-ca-bundle.sh > \
# install/kubernetes/istio-sidecar-injector-with-ca-bundle.yaml

# kubectl apply -f install/kubernetes/istio-sidecar-injector-with-ca-bundle.yaml

############## need to set hostPort to 80 on istio-ingress pod! 

helm install stable/prometheus
helm install stable/grafana