import { __extends } from "tslib";
import { ListPackageVersionDependenciesRequest, ListPackageVersionDependenciesResult } from "../models/models_0";
import { deserializeAws_restJson1ListPackageVersionDependenciesCommand, serializeAws_restJson1ListPackageVersionDependenciesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ListPackageVersionDependenciesCommand = /** @class */ (function (_super) {
    __extends(ListPackageVersionDependenciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPackageVersionDependenciesCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    ListPackageVersionDependenciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "ListPackageVersionDependenciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPackageVersionDependenciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPackageVersionDependenciesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPackageVersionDependenciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPackageVersionDependenciesCommand(input, context);
    };
    ListPackageVersionDependenciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPackageVersionDependenciesCommand(output, context);
    };
    return ListPackageVersionDependenciesCommand;
}($Command));
export { ListPackageVersionDependenciesCommand };
//# sourceMappingURL=ListPackageVersionDependenciesCommand.js.map