import { __extends } from "tslib";
import { CreateResourceRequest, CreateResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateResourceCommand, serializeAws_json1_1CreateResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Amazon WorkMail resource. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new CreateResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceCommandInput} for command's `input` shape.
 * @see {@link CreateResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateResourceCommand = /** @class */ (function (_super) {
    __extends(CreateResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateResourceCommand(input) {
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
    CreateResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "CreateResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateResourceCommand(input, context);
    };
    CreateResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateResourceCommand(output, context);
    };
    return CreateResourceCommand;
}($Command));
export { CreateResourceCommand };
//# sourceMappingURL=CreateResourceCommand.js.map