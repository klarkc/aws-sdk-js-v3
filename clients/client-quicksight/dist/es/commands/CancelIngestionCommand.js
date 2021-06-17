import { __extends } from "tslib";
import { CancelIngestionRequest, CancelIngestionResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelIngestionCommand, serializeAws_restJson1CancelIngestionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels an ongoing ingestion of data into SPICE.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CancelIngestionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CancelIngestionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CancelIngestionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelIngestionCommandInput} for command's `input` shape.
 * @see {@link CancelIngestionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelIngestionCommand = /** @class */ (function (_super) {
    __extends(CancelIngestionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelIngestionCommand(input) {
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
    CancelIngestionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "CancelIngestionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelIngestionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelIngestionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelIngestionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelIngestionCommand(input, context);
    };
    CancelIngestionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelIngestionCommand(output, context);
    };
    return CancelIngestionCommand;
}($Command));
export { CancelIngestionCommand };
//# sourceMappingURL=CancelIngestionCommand.js.map