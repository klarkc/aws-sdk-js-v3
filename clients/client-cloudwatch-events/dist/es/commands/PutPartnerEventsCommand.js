import { __extends } from "tslib";
import { PutPartnerEventsRequest, PutPartnerEventsResponse } from "../models/models_0";
import { deserializeAws_json1_1PutPartnerEventsCommand, serializeAws_json1_1PutPartnerEventsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This is used by SaaS partners to write events to a customer's partner event bus. AWS
 *       customers do not use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, PutPartnerEventsCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, PutPartnerEventsCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new PutPartnerEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPartnerEventsCommandInput} for command's `input` shape.
 * @see {@link PutPartnerEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutPartnerEventsCommand = /** @class */ (function (_super) {
    __extends(PutPartnerEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutPartnerEventsCommand(input) {
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
    PutPartnerEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "PutPartnerEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutPartnerEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutPartnerEventsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutPartnerEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutPartnerEventsCommand(input, context);
    };
    PutPartnerEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutPartnerEventsCommand(output, context);
    };
    return PutPartnerEventsCommand;
}($Command));
export { PutPartnerEventsCommand };
//# sourceMappingURL=PutPartnerEventsCommand.js.map