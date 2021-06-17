import { __extends } from "tslib";
import { ListPackagesRequest, ListPackagesResult } from "../models/models_0";
import { deserializeAws_restJson1ListPackagesCommand, serializeAws_restJson1ListPackagesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Returns a list of
 *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html">PackageSummary</a>
 *         objects for packages in a repository that match the request parameters.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListPackagesCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListPackagesCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListPackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackagesCommandInput} for command's `input` shape.
 * @see {@link ListPackagesCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPackagesCommand = /** @class */ (function (_super) {
    __extends(ListPackagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPackagesCommand(input) {
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
    ListPackagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "ListPackagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPackagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPackagesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPackagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPackagesCommand(input, context);
    };
    ListPackagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPackagesCommand(output, context);
    };
    return ListPackagesCommand;
}($Command));
export { ListPackagesCommand };
//# sourceMappingURL=ListPackagesCommand.js.map