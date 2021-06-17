import { __extends } from "tslib";
import { DecreaseReplicationFactorRequest, DecreaseReplicationFactorResponse } from "../models/models_0";
import { deserializeAws_json1_1DecreaseReplicationFactorCommand, serializeAws_json1_1DecreaseReplicationFactorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes one or more nodes from a DAX cluster.</p>
 *         <note>
 *             <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DecreaseReplicationFactorCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DecreaseReplicationFactorCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DecreaseReplicationFactorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DecreaseReplicationFactorCommandInput} for command's `input` shape.
 * @see {@link DecreaseReplicationFactorCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DecreaseReplicationFactorCommand = /** @class */ (function (_super) {
    __extends(DecreaseReplicationFactorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DecreaseReplicationFactorCommand(input) {
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
    DecreaseReplicationFactorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "DecreaseReplicationFactorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DecreaseReplicationFactorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DecreaseReplicationFactorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DecreaseReplicationFactorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DecreaseReplicationFactorCommand(input, context);
    };
    DecreaseReplicationFactorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DecreaseReplicationFactorCommand(output, context);
    };
    return DecreaseReplicationFactorCommand;
}($Command));
export { DecreaseReplicationFactorCommand };
//# sourceMappingURL=DecreaseReplicationFactorCommand.js.map