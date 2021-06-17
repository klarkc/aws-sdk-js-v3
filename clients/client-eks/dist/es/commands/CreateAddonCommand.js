import { __extends } from "tslib";
import { CreateAddonRequest, CreateAddonResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateAddonCommand, serializeAws_restJson1CreateAddonCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon EKS add-on.</p>
 *         <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management of common
 *             operational software for Amazon EKS clusters. Amazon EKS add-ons can only be used with Amazon EKS
 *             clusters running version 1.18 with platform version <code>eks.3</code> or later because
 *             add-ons rely on the Server-side Apply Kubernetes feature, which is only available in
 *             Kubernetes 1.18 and later.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateAddonCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateAddonCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new CreateAddonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAddonCommandInput} for command's `input` shape.
 * @see {@link CreateAddonCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAddonCommand = /** @class */ (function (_super) {
    __extends(CreateAddonCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAddonCommand(input) {
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
    CreateAddonCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "CreateAddonCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAddonRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAddonResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAddonCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAddonCommand(input, context);
    };
    CreateAddonCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAddonCommand(output, context);
    };
    return CreateAddonCommand;
}($Command));
export { CreateAddonCommand };
//# sourceMappingURL=CreateAddonCommand.js.map