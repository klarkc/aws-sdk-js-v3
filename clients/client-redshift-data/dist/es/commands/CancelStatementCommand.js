import { __extends } from "tslib";
import { CancelStatementRequest, CancelStatementResponse } from "../models/models_0";
import { deserializeAws_json1_1CancelStatementCommand, serializeAws_json1_1CancelStatementCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a running query. To be canceled, a query must be running. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, CancelStatementCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, CancelStatementCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new CancelStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelStatementCommandInput} for command's `input` shape.
 * @see {@link CancelStatementCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelStatementCommand = /** @class */ (function (_super) {
    __extends(CancelStatementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelStatementCommand(input) {
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
    CancelStatementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftDataClient";
        var commandName = "CancelStatementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelStatementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelStatementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelStatementCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelStatementCommand(input, context);
    };
    CancelStatementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelStatementCommand(output, context);
    };
    return CancelStatementCommand;
}($Command));
export { CancelStatementCommand };
//# sourceMappingURL=CancelStatementCommand.js.map