import { __extends } from "tslib";
import { CancelSpotInstanceRequestsRequest, CancelSpotInstanceRequestsResult } from "../models/models_0";
import { deserializeAws_ec2CancelSpotInstanceRequestsCommand, serializeAws_ec2CancelSpotInstanceRequestsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels one or more Spot Instance requests.</p>
 *          <important>
 *             <p>Canceling a Spot Instance request does not terminate running Spot Instances associated with the request.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelSpotInstanceRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelSpotInstanceRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelSpotInstanceRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSpotInstanceRequestsCommandInput} for command's `input` shape.
 * @see {@link CancelSpotInstanceRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelSpotInstanceRequestsCommand = /** @class */ (function (_super) {
    __extends(CancelSpotInstanceRequestsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelSpotInstanceRequestsCommand(input) {
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
    CancelSpotInstanceRequestsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CancelSpotInstanceRequestsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelSpotInstanceRequestsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelSpotInstanceRequestsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelSpotInstanceRequestsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CancelSpotInstanceRequestsCommand(input, context);
    };
    CancelSpotInstanceRequestsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CancelSpotInstanceRequestsCommand(output, context);
    };
    return CancelSpotInstanceRequestsCommand;
}($Command));
export { CancelSpotInstanceRequestsCommand };
//# sourceMappingURL=CancelSpotInstanceRequestsCommand.js.map