import { __extends } from "tslib";
import { CreatePartitionRequest, CreatePartitionResponse } from "../models/models_0";
import { deserializeAws_json1_1CreatePartitionCommand, serializeAws_json1_1CreatePartitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new partition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreatePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreatePartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePartitionCommandInput} for command's `input` shape.
 * @see {@link CreatePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePartitionCommand = /** @class */ (function (_super) {
    __extends(CreatePartitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePartitionCommand(input) {
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
    CreatePartitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CreatePartitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePartitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePartitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePartitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePartitionCommand(input, context);
    };
    CreatePartitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePartitionCommand(output, context);
    };
    return CreatePartitionCommand;
}($Command));
export { CreatePartitionCommand };
//# sourceMappingURL=CreatePartitionCommand.js.map