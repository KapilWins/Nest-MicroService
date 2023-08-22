start:
	@case "$(shell uname -s)" in \
		*) \
			gnome-terminal --tab --command "nats-server" \
			--tab --execute bash -c "lerna run start --parallel;bash";; \
			*) \
	esac