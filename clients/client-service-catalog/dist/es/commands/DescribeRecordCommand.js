import { __extends } from "tslib";
import { DescribeRecordInput, DescribeRecordOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeRecordCommand, serializeAws_json1_1DescribeRecordCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the specified request operation.</p>
 *          <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>,
 *          <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>).
 *       </p>
 *          <note>
 *             <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner
 *       will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to
 *       use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeRecordCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeRecordCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecordCommandInput} for command's `input` shape.
 * @see {@link DescribeRecordCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRecordCommand = /** @class */ (function (_super) {
    __extends(DescribeRecordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRecordCommand(input) {
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
    DescribeRecordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DescribeRecordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRecordInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRecordOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRecordCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeRecordCommand(input, context);
    };
    DescribeRecordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeRecordCommand(output, context);
    };
    return DescribeRecordCommand;
}($Command));
export { DescribeRecordCommand };
//# sourceMappingURL=DescribeRecordCommand.js.map