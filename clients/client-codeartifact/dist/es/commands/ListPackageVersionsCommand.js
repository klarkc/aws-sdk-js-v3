import { __extends } from "tslib";
import { ListPackageVersionsRequest, ListPackageVersionsResult } from "../models/models_0";
import { deserializeAws_restJson1ListPackageVersionsCommand, serializeAws_restJson1ListPackageVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Returns a list of
 *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">PackageVersionSummary</a>
 *         objects for package versions in a repository that match the request parameters.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListPackageVersionsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListPackageVersionsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListPackageVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackageVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPackageVersionsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPackageVersionsCommand = /** @class */ (function (_super) {
    __extends(ListPackageVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPackageVersionsCommand(input) {
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
    ListPackageVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "ListPackageVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPackageVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPackageVersionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPackageVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPackageVersionsCommand(input, context);
    };
    ListPackageVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPackageVersionsCommand(output, context);
    };
    return ListPackageVersionsCommand;
}($Command));
export { ListPackageVersionsCommand };
//# sourceMappingURL=ListPackageVersionsCommand.js.map