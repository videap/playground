FROM ubuntu:latest

RUN apt update && apt install curl python2 -y
RUN curl https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-cli-405.0.0-linux-x86_64.tar.gz --output gcloud-installer.tar.gz
RUN tar -xvf gcloud-installer.tar.gz
RUN /google-cloud-sdk/install.sh -q
RUN ln -s /google-cloud-sdk/bin/gcloud /bin/gcloud

ENV VAR1 ""

ENTRYPOINT echo $VAR1
