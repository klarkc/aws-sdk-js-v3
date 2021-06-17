import { __extends } from "tslib";
import { ListComplianceStatusRequest, ListComplianceStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1ListComplianceStatusCommand, serializeAws_json1_1ListComplianceStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of <code>PolicyComplianceStatus</code> objects. Use
 *         <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected
 *       by the specified policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListComplianceStatusCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListComplianceStatusCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListComplianceStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComplianceStatusCommandInput} for command's `input` shape.
 * @see {@link ListComplianceStatusCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListComplianceStatusCommand = /** @class */ (function (_super) {
    __extends(ListComplianceStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListComplianceStatusCommand(input) {
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
    ListComplianceStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "ListComplianceStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListComplianceStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListComplianceStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListComplianceStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListComplianceStatusCommand(input, context);
    };
    ListComplianceStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListComplianceStatusCommand(output, context);
    };
    return ListComplianceStatusCommand;
}($Command));
export { ListComplianceStatusCommand };
//# sourceMappingURL=ListComplianceStatusCommand.js.map