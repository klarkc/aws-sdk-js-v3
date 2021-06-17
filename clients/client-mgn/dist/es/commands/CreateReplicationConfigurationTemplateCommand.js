import { __extends } from "tslib";
import { CreateReplicationConfigurationTemplateRequest, ReplicationConfigurationTemplate } from "../models/models_0";
import { deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand, serializeAws_restJson1CreateReplicationConfigurationTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new ReplicationConfigurationTemplate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, CreateReplicationConfigurationTemplateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, CreateReplicationConfigurationTemplateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new CreateReplicationConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateReplicationConfigurationTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateReplicationConfigurationTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateReplicationConfigurationTemplateCommand(input) {
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
    CreateReplicationConfigurationTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "CreateReplicationConfigurationTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateReplicationConfigurationTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ReplicationConfigurationTemplate.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateReplicationConfigurationTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateReplicationConfigurationTemplateCommand(input, context);
    };
    CreateReplicationConfigurationTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand(output, context);
    };
    return CreateReplicationConfigurationTemplateCommand;
}($Command));
export { CreateReplicationConfigurationTemplateCommand };
//# sourceMappingURL=CreateReplicationConfigurationTemplateCommand.js.map