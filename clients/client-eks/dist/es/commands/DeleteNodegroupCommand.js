import { __extends } from "tslib";
import { DeleteNodegroupRequest, DeleteNodegroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteNodegroupCommand, serializeAws_restJson1DeleteNodegroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an Amazon EKS node group for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteNodegroupCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteNodegroupCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DeleteNodegroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNodegroupCommandInput} for command's `input` shape.
 * @see {@link DeleteNodegroupCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNodegroupCommand = /** @class */ (function (_super) {
    __extends(DeleteNodegroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNodegroupCommand(input) {
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
    DeleteNodegroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "DeleteNodegroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNodegroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteNodegroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNodegroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteNodegroupCommand(input, context);
    };
    DeleteNodegroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteNodegroupCommand(output, context);
    };
    return DeleteNodegroupCommand;
}($Command));
export { DeleteNodegroupCommand };
//# sourceMappingURL=DeleteNodegroupCommand.js.map