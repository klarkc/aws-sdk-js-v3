import { __extends } from "tslib";
import { IncreaseReplicationFactorRequest, IncreaseReplicationFactorResponse } from "../models/models_0";
import { deserializeAws_json1_1IncreaseReplicationFactorCommand, serializeAws_json1_1IncreaseReplicationFactorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds one or more nodes to a DAX cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, IncreaseReplicationFactorCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, IncreaseReplicationFactorCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new IncreaseReplicationFactorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IncreaseReplicationFactorCommandInput} for command's `input` shape.
 * @see {@link IncreaseReplicationFactorCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var IncreaseReplicationFactorCommand = /** @class */ (function (_super) {
    __extends(IncreaseReplicationFactorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function IncreaseReplicationFactorCommand(input) {
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
    IncreaseReplicationFactorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "IncreaseReplicationFactorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: IncreaseReplicationFactorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: IncreaseReplicationFactorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    IncreaseReplicationFactorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1IncreaseReplicationFactorCommand(input, context);
    };
    IncreaseReplicationFactorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1IncreaseReplicationFactorCommand(output, context);
    };
    return IncreaseReplicationFactorCommand;
}($Command));
export { IncreaseReplicationFactorCommand };
//# sourceMappingURL=IncreaseReplicationFactorCommand.js.map