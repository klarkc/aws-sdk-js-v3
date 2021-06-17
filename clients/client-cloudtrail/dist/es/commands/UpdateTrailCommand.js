import { __extends } from "tslib";
import { UpdateTrailRequest, UpdateTrailResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateTrailCommand, serializeAws_json1_1UpdateTrailCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the settings that specify delivery of log files. Changes to a trail do not require
 *          stopping the CloudTrail service. Use this action to designate an existing bucket for log
 *          delivery. If the existing bucket has previously been a target for CloudTrail log files,
 *          an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the
 *          region in which the trail was created; otherwise, an
 *             <code>InvalidHomeRegionException</code> is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, UpdateTrailCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, UpdateTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new UpdateTrailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrailCommandInput} for command's `input` shape.
 * @see {@link UpdateTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTrailCommand = /** @class */ (function (_super) {
    __extends(UpdateTrailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTrailCommand(input) {
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
    UpdateTrailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "UpdateTrailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTrailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTrailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTrailCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateTrailCommand(input, context);
    };
    UpdateTrailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateTrailCommand(output, context);
    };
    return UpdateTrailCommand;
}($Command));
export { UpdateTrailCommand };
//# sourceMappingURL=UpdateTrailCommand.js.map