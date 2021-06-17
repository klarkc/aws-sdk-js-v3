"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPackageVersionDependenciesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *          Returns the direct dependencies for a package version. The dependencies are returned as
 *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">PackageDependency</a>
 *           objects. CodeArtifact extracts the dependencies for a package version from the metadata file for the package
 *           format (for example, the <code>package.json</code> file for npm packages and the <code>pom.xml</code> file
 *         for Maven). Any package version dependencies that are not listed in the configuration file are not returned.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListPackageVersionDependenciesCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListPackageVersionDependenciesCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListPackageVersionDependenciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackageVersionDependenciesCommandInput} for command's `input` shape.
 * @see {@link ListPackageVersionDependenciesCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListPackageVersionDependenciesCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "ListPackageVersionDependenciesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListPackageVersionDependenciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListPackageVersionDependenciesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListPackageVersionDependenciesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListPackageVersionDependenciesCommand(output, context);
    }
}
exports.ListPackageVersionDependenciesCommand = ListPackageVersionDependenciesCommand;
//# sourceMappingURL=ListPackageVersionDependenciesCommand.js.map