Web Form Generator

Uses the following
    NodeJs v6.11.1
    MongoDb v2.6.12
    Express JS v4.15.4
    Angular JS v1.6.5

== Setup ==
# Use NPM to install Express JS
    mkdir app
    cd app     
    npm init
    <follow promps>
    npm install express --save

# Use NPM to install Angular JS
    npm install angular --save

# SELinux permission for mongo
    sudo yum provides semanage
    sudo yum -y install policycoreutils	
    sudo semanage port -a -t mongod_port_t -p tcp 27017

# Install Mongo
    <from website -- for RedHat (actual CentOS7)
    create file /etc/yum.repos.d/mongodb-org-2.6.repo
    add to file
    	[mongodb-org-2.6]
	name=MongoDB 2.6 Repository
	baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/
	gpgcheck=0
	enabled=1
    sudo yum install -y mongodb-org

# Start Mongo
    sudo service mongod start

# Set mongo to start when system starts
    sudo chkconfig mongod on