import { __extends } from "tslib";
import { CopyDBClusterParameterGroupMessage, CopyDBClusterParameterGroupResult } from "../models/models_0";
import { deserializeAws_queryCopyDBClusterParameterGroupCommand, serializeAws_queryCopyDBClusterParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copies the specified DB cluster parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CopyDBClusterParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CopyDBClusterParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new CopyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CopyDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopyDBClusterParameterGroupCommand = /** @class */ (function (_super) {
    __extends(CopyDBClusterParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CopyDBClusterParameterGroupCommand(input) {
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
    CopyDBClusterParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "CopyDBClusterParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CopyDBClusterParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CopyDBClusterParameterGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CopyDBClusterParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCopyDBClusterParameterGroupCommand(input, context);
    };
    CopyDBClusterParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCopyDBClusterParameterGroupCommand(output, context);
    };
    return CopyDBClusterParameterGroupCommand;
}($Command));
export { CopyDBClusterParameterGroupCommand };
//# sourceMappingURL=CopyDBClusterParameterGroupCommand.js.map