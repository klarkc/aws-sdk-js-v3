import { __extends } from "tslib";
import { CreateAnomalySubscriptionRequest, CreateAnomalySubscriptionResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateAnomalySubscriptionCommand, serializeAws_json1_1CreateAnomalySubscriptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a subscription to a cost anomaly detection monitor. You can use each subscription to
 *       define subscribers with email or SNS notifications. Email subscribers can set a dollar
 *       threshold and a time frequency for receiving notifications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, CreateAnomalySubscriptionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, CreateAnomalySubscriptionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new CreateAnomalySubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAnomalySubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateAnomalySubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAnomalySubscriptionCommand = /** @class */ (function (_super) {
    __extends(CreateAnomalySubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAnomalySubscriptionCommand(input) {
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
    CreateAnomalySubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "CreateAnomalySubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAnomalySubscriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAnomalySubscriptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAnomalySubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAnomalySubscriptionCommand(input, context);
    };
    CreateAnomalySubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAnomalySubscriptionCommand(output, context);
    };
    return CreateAnomalySubscriptionCommand;
}($Command));
export { CreateAnomalySubscriptionCommand };
//# sourceMappingURL=CreateAnomalySubscriptionCommand.js.map