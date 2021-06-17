import { __extends } from "tslib";
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateClusterCommand, serializeAws_restJson1CreateClusterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, CreateClusterCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, CreateClusterCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateClusterCommand = /** @class */ (function (_super) {
    __extends(CreateClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateClusterCommand(input) {
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
    CreateClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "CreateClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateClusterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateClusterCommand(input, context);
    };
    CreateClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateClusterCommand(output, context);
    };
    return CreateClusterCommand;
}($Command));
export { CreateClusterCommand };
//# sourceMappingURL=CreateClusterCommand.js.map