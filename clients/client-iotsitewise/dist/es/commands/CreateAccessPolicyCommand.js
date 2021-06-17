import { __extends } from "tslib";
import { CreateAccessPolicyRequest, CreateAccessPolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateAccessPolicyCommand, serializeAws_restJson1CreateAccessPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an access policy that grants the specified identity (AWS SSO user, AWS SSO group, or
 *       IAM user) access to the specified AWS IoT SiteWise Monitor portal or project resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateAccessPolicyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateAccessPolicyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new CreateAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAccessPolicyCommand = /** @class */ (function (_super) {
    __extends(CreateAccessPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAccessPolicyCommand(input) {
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
    CreateAccessPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "CreateAccessPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAccessPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAccessPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAccessPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAccessPolicyCommand(input, context);
    };
    CreateAccessPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAccessPolicyCommand(output, context);
    };
    return CreateAccessPolicyCommand;
}($Command));
export { CreateAccessPolicyCommand };
//# sourceMappingURL=CreateAccessPolicyCommand.js.map