import { __extends } from "tslib";
import { ListAuditFindingsRequest, ListAuditFindingsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListAuditFindingsCommand, serializeAws_restJson1ListAuditFindingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the findings (results) of a Device Defender audit or of the audits
 *         performed during a specified time period. (Findings are retained for 90 days.)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditFindingsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditFindingsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAuditFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAuditFindingsCommandInput} for command's `input` shape.
 * @see {@link ListAuditFindingsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAuditFindingsCommand = /** @class */ (function (_super) {
    __extends(ListAuditFindingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAuditFindingsCommand(input) {
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
    ListAuditFindingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListAuditFindingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAuditFindingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAuditFindingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAuditFindingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAuditFindingsCommand(input, context);
    };
    ListAuditFindingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAuditFindingsCommand(output, context);
    };
    return ListAuditFindingsCommand;
}($Command));
export { ListAuditFindingsCommand };
//# sourceMappingURL=ListAuditFindingsCommand.js.map