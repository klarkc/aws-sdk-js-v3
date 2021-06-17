import { __extends } from "tslib";
import { CopyOptionGroupMessage, CopyOptionGroupResult } from "../models/models_0";
import { deserializeAws_queryCopyOptionGroupCommand, serializeAws_queryCopyOptionGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copies the specified option group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CopyOptionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyOptionGroupCommandInput} for command's `input` shape.
 * @see {@link CopyOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopyOptionGroupCommand = /** @class */ (function (_super) {
    __extends(CopyOptionGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CopyOptionGroupCommand(input) {
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
    CopyOptionGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "CopyOptionGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CopyOptionGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CopyOptionGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CopyOptionGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCopyOptionGroupCommand(input, context);
    };
    CopyOptionGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCopyOptionGroupCommand(output, context);
    };
    return CopyOptionGroupCommand;
}($Command));
export { CopyOptionGroupCommand };
//# sourceMappingURL=CopyOptionGroupCommand.js.map