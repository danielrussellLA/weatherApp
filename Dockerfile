FROM node:16.5

EXPOSE 3000

# Otherwise some installs will ask for input
ENV DEBIAN_FRONTEND="noninteractive"

RUN apt-get update \
	&& apt-get upgrade -y \
	&& apt-get install --no-install-recommends -y \
		cron \
		curl \
		jq \
		libyaml-dev \
		logrotate \
		rsyslog \
		vim \
	&& rm -rf /var/lib/apt/lists/*

WORKDIR /weatherApp

RUN mkdir -p /var/log/nodejs

COPY . .

CMD ["/bin/bash", "run.sh"]
