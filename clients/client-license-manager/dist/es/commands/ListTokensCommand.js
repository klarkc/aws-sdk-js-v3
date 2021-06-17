import { __extends } from "tslib";
import { ListTokensRequest, ListTokensResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTokensCommand, serializeAws_json1_1ListTokensCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists your tokens.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListTokensCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListTokensCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListTokensCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTokensCommandInput} for command's `input` shape.
 * @see {@link ListTokensCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTokensCommand = /** @class */ (function (_super) {
    __extends(ListTokensCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTokensCommand(input) {
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
    ListTokensCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "ListTokensCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTokensRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTokensResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTokensCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTokensCommand(input, context);
    };
    ListTokensCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTokensCommand(output, context);
    };
    return ListTokensCommand;
}($Command));
export { ListTokensCommand };
//# sourceMappingURL=ListTokensCommand.js.map