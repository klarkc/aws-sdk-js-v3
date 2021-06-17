import { __extends } from "tslib";
import { CopyDBParameterGroupMessage, CopyDBParameterGroupResult } from "../models/models_0";
import { deserializeAws_queryCopyDBParameterGroupCommand, serializeAws_queryCopyDBParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copies the specified DB parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CopyDBParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CopyDBParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new CopyDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CopyDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopyDBParameterGroupCommand = /** @class */ (function (_super) {
    __extends(CopyDBParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CopyDBParameterGroupCommand(input) {
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
    CopyDBParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "CopyDBParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CopyDBParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CopyDBParameterGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CopyDBParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCopyDBParameterGroupCommand(input, context);
    };
    CopyDBParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCopyDBParameterGroupCommand(output, context);
    };
    return CopyDBParameterGroupCommand;
}($Command));
export { CopyDBParameterGroupCommand };
//# sourceMappingURL=CopyDBParameterGroupCommand.js.map