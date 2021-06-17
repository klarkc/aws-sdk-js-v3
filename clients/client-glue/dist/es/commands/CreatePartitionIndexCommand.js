import { __extends } from "tslib";
import { CreatePartitionIndexRequest, CreatePartitionIndexResponse } from "../models/models_0";
import { deserializeAws_json1_1CreatePartitionIndexCommand, serializeAws_json1_1CreatePartitionIndexCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a specified partition index in an existing table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreatePartitionIndexCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreatePartitionIndexCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreatePartitionIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePartitionIndexCommandInput} for command's `input` shape.
 * @see {@link CreatePartitionIndexCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePartitionIndexCommand = /** @class */ (function (_super) {
    __extends(CreatePartitionIndexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePartitionIndexCommand(input) {
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
    CreatePartitionIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CreatePartitionIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePartitionIndexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePartitionIndexResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePartitionIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePartitionIndexCommand(input, context);
    };
    CreatePartitionIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePartitionIndexCommand(output, context);
    };
    return CreatePartitionIndexCommand;
}($Command));
export { CreatePartitionIndexCommand };
//# sourceMappingURL=CreatePartitionIndexCommand.js.map