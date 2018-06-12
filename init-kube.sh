#
#minikube start     --extra-config=controller-manager.cluster-signing-cert-file="/var/lib/localkube/certs/ca.crt"     --extra-config=controller-manager.cluster-signing-key-file="/var/lib/localkube/certs/ca.key"     --extra-config=apiserver.admission-control="NamespaceLifecycle,LimitRanger,ServiceAccount,PersistentVolumeLabel,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota"     --kubernetes-version=v1.10.0 --vm-driver=kvm2 --memory=8192

minikube start \
    --extra-config=controller-manager.cluster-signing-cert-file="/var/lib/localkube/certs/ca.crt" \
    --extra-config=controller-manager.cluster-signing-key-file="/var/lib/localkube/certs/ca.key" \
    --extra-config=apiserver.admission-control="NamespaceLifecycle,LimitRanger,ServiceAccount,PersistentVolumeLabel,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota" \
    --kubernetes-version=v1.10.0 \
    --memory 8192
curl -L https://git.io/getLatestIstio | sh -
# 

# install istio from docs

# kubectl create -f install/kubernetes/helm/helm-service-account.yaml
# helm init --service-account tiller
# helm install install/kubernetes/helm/istio --name istio --namespace istio-system

############## need to set hostPort to 80 on istio-ingress pod! 


kubectl apply -f install/kubernetes/addons/prometheus.yaml


#helm install stable/grafana