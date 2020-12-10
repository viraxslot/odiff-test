FROM mcr.microsoft.com/playwright:v1.6.2
USER root
RUN mkdir -p /home/odiff
WORKDIR /home/odiff

COPY . .

RUN npm i && chmod 777 entrypoint.sh
CMD ["/bin/bash", "./entrypoint.sh"]