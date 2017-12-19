Parece que não está funcionando no empacotamento, alternativa:

```
<profiles>
		<profile>
			<!-- Cria uma versão de distribuição "otimizada" do front-end -->
			<id>prod</id>
			<build>
				<plugins>

					<plugin>
						<groupId>com.github.eirslett</groupId>
						<artifactId>frontend-maven-plugin</artifactId>
						<version>1.3</version>
						<configuration>
							<workingDirectory>src/main/frontend</workingDirectory>
							<installDirectory>target</installDirectory>
							<nodeVersion>v4.6.0</nodeVersion>
						</configuration>
						<executions>
							<execution>
								<id>install node and npm</id>
								<goals>
									<goal>install-node-and-npm</goal>
								</goals>
								<phase>generate-resources</phase>
							</execution>
							<execution>
								<id>npm install</id>
								<goals>
									<goal>npm</goal>
								</goals>
								<phase>generate-resources</phase>
								<configuration>
									<arguments>install</arguments>
								</configuration>
							</execution>
							<execution>
								<id>gulp build</id>
								<goals>
									<goal>gulp</goal>
								</goals>
								<phase>generate-resources</phase>
							</execution>
						</executions>
					</plugin>

					<plugin>
						<groupId>org.apache.maven.plugins</groupId>
						<artifactId>maven-war-plugin</artifactId>
						<version>3.0.0</version>
						<configuration>
							<webResources>
								<webResource>
									<directory>target/webapp-dist</directory>
								</webResource>
							</webResources>
						</configuration>
					</plugin>

				</plugins>
			</build>
		</profile>
```
