import { __extends } from "tslib";
import { GetModelsRequest, GetModelsResult } from "../models/models_0";
import { deserializeAws_json1_1GetModelsCommand, serializeAws_json1_1GetModelsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets one or more models. Gets all models for the AWS account if no model type and no model id provided. Gets all models for the AWS account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified. </p>
 *          <p>This is a paginated API. If you
 *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
 *          per page. If you provide a <code>maxResults</code>, the value must be between 1 and 10.
 *          To get the next page results, provide the pagination token from the
 *             response as part of your request. A null pagination token
 *          fetches the records from the beginning.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetModelsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetModelsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetModelsCommandInput} for command's `input` shape.
 * @see {@link GetModelsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetModelsCommand = /** @class */ (function (_super) {
    __extends(GetModelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetModelsCommand(input) {
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
    GetModelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "GetModelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetModelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetModelsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetModelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetModelsCommand(input, context);
    };
    GetModelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetModelsCommand(output, context);
    };
    return GetModelsCommand;
}($Command));
export { GetModelsCommand };
//# sourceMappingURL=GetModelsCommand.js.map