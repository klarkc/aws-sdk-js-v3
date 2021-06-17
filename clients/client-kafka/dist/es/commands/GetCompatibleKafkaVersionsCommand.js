import { __extends } from "tslib";
import { GetCompatibleKafkaVersionsRequest, GetCompatibleKafkaVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCompatibleKafkaVersionsCommand, serializeAws_restJson1GetCompatibleKafkaVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the Apache Kafka versions to which you can update the MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, GetCompatibleKafkaVersionsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, GetCompatibleKafkaVersionsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new GetCompatibleKafkaVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCompatibleKafkaVersionsCommandInput} for command's `input` shape.
 * @see {@link GetCompatibleKafkaVersionsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCompatibleKafkaVersionsCommand = /** @class */ (function (_super) {
    __extends(GetCompatibleKafkaVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCompatibleKafkaVersionsCommand(input) {
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
    GetCompatibleKafkaVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "GetCompatibleKafkaVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCompatibleKafkaVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCompatibleKafkaVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCompatibleKafkaVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCompatibleKafkaVersionsCommand(input, context);
    };
    GetCompatibleKafkaVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCompatibleKafkaVersionsCommand(output, context);
    };
    return GetCompatibleKafkaVersionsCommand;
}($Command));
export { GetCompatibleKafkaVersionsCommand };
//# sourceMappingURL=GetCompatibleKafkaVersionsCommand.js.map