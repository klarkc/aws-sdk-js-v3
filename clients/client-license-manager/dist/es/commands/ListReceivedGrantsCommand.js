import { __extends } from "tslib";
import { ListReceivedGrantsRequest, ListReceivedGrantsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListReceivedGrantsCommand, serializeAws_json1_1ListReceivedGrantsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists grants that are received but not accepted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListReceivedGrantsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListReceivedGrantsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListReceivedGrantsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReceivedGrantsCommandInput} for command's `input` shape.
 * @see {@link ListReceivedGrantsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListReceivedGrantsCommand = /** @class */ (function (_super) {
    __extends(ListReceivedGrantsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListReceivedGrantsCommand(input) {
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
    ListReceivedGrantsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "ListReceivedGrantsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListReceivedGrantsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListReceivedGrantsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListReceivedGrantsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListReceivedGrantsCommand(input, context);
    };
    ListReceivedGrantsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListReceivedGrantsCommand(output, context);
    };
    return ListReceivedGrantsCommand;
}($Command));
export { ListReceivedGrantsCommand };
//# sourceMappingURL=ListReceivedGrantsCommand.js.map