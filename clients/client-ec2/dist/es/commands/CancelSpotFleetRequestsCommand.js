import { __extends } from "tslib";
import { CancelSpotFleetRequestsRequest, CancelSpotFleetRequestsResponse } from "../models/models_0";
import { deserializeAws_ec2CancelSpotFleetRequestsCommand, serializeAws_ec2CancelSpotFleetRequestsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels the specified Spot Fleet requests.</p>
 *          <p>After you cancel a Spot Fleet request, the Spot Fleet launches no new Spot Instances.
 *        You must specify whether the Spot Fleet should also terminate its Spot Instances.
 *        If you terminate the instances, the Spot Fleet request enters the <code>cancelled_terminating</code> state.
 *        Otherwise, the Spot Fleet request enters the <code>cancelled_running</code> state and the instances
 *        continue to run until they are interrupted or you terminate them manually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelSpotFleetRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelSpotFleetRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelSpotFleetRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSpotFleetRequestsCommandInput} for command's `input` shape.
 * @see {@link CancelSpotFleetRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelSpotFleetRequestsCommand = /** @class */ (function (_super) {
    __extends(CancelSpotFleetRequestsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelSpotFleetRequestsCommand(input) {
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
    CancelSpotFleetRequestsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CancelSpotFleetRequestsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelSpotFleetRequestsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelSpotFleetRequestsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelSpotFleetRequestsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CancelSpotFleetRequestsCommand(input, context);
    };
    CancelSpotFleetRequestsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CancelSpotFleetRequestsCommand(output, context);
    };
    return CancelSpotFleetRequestsCommand;
}($Command));
export { CancelSpotFleetRequestsCommand };
//# sourceMappingURL=CancelSpotFleetRequestsCommand.js.map