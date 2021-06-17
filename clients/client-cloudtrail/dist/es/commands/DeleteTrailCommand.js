import { __extends } from "tslib";
import { DeleteTrailRequest, DeleteTrailResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteTrailCommand, serializeAws_json1_1DeleteTrailCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a trail. This operation must be called from the region in which the trail was
 *          created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails
 *          in other regions) of a trail that is enabled in all regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DeleteTrailCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DeleteTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new DeleteTrailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrailCommandInput} for command's `input` shape.
 * @see {@link DeleteTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTrailCommand = /** @class */ (function (_super) {
    __extends(DeleteTrailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTrailCommand(input) {
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
    DeleteTrailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "DeleteTrailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTrailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTrailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTrailCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTrailCommand(input, context);
    };
    DeleteTrailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTrailCommand(output, context);
    };
    return DeleteTrailCommand;
}($Command));
export { DeleteTrailCommand };
//# sourceMappingURL=DeleteTrailCommand.js.map