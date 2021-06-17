import { __extends } from "tslib";
import { PutEvaluationsRequest, PutEvaluationsResponse } from "../models/models_0";
import { deserializeAws_json1_1PutEvaluationsCommand, serializeAws_json1_1PutEvaluationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used by an AWS Lambda function to deliver evaluation results to
 * 			AWS Config. This action is required in every AWS Lambda function
 * 			that is invoked by an AWS Config rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutEvaluationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutEvaluationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutEvaluationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEvaluationsCommandInput} for command's `input` shape.
 * @see {@link PutEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutEvaluationsCommand = /** @class */ (function (_super) {
    __extends(PutEvaluationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutEvaluationsCommand(input) {
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
    PutEvaluationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "PutEvaluationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutEvaluationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutEvaluationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutEvaluationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutEvaluationsCommand(input, context);
    };
    PutEvaluationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutEvaluationsCommand(output, context);
    };
    return PutEvaluationsCommand;
}($Command));
export { PutEvaluationsCommand };
//# sourceMappingURL=PutEvaluationsCommand.js.map