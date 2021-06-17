import { __extends } from "tslib";
import { CreateProtectionGroupRequest, CreateProtectionGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateProtectionGroupCommand, serializeAws_json1_1CreateProtectionGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, CreateProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, CreateProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new CreateProtectionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProtectionGroupCommand = /** @class */ (function (_super) {
    __extends(CreateProtectionGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProtectionGroupCommand(input) {
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
    CreateProtectionGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "CreateProtectionGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProtectionGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProtectionGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProtectionGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateProtectionGroupCommand(input, context);
    };
    CreateProtectionGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateProtectionGroupCommand(output, context);
    };
    return CreateProtectionGroupCommand;
}($Command));
export { CreateProtectionGroupCommand };
//# sourceMappingURL=CreateProtectionGroupCommand.js.map