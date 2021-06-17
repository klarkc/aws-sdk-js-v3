import { __extends } from "tslib";
import { DescribePatchPropertiesRequest, DescribePatchPropertiesResult } from "../models/models_1";
import { deserializeAws_json1_1DescribePatchPropertiesCommand, serializeAws_json1_1DescribePatchPropertiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the properties of available patches organized by product, product family,
 *    classification, severity, and other properties of available patches. You can use the reported
 *    properties in the filters you specify in requests for actions such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p>
 *          <p>The following section lists the properties that can be used in filters for each major
 *    operating system type:</p>
 *          <dl>
 *             <dt>AMAZON_LINUX</dt>
 *             <dd>
 *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
 *             </dd>
 *             <dt>AMAZON_LINUX_2</dt>
 *             <dd>
 *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
 *             </dd>
 *             <dt>CENTOS</dt>
 *             <dd>
 *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
 *             </dd>
 *             <dt>DEBIAN</dt>
 *             <dd>
 *                <p>Valid properties: PRODUCT, PRIORITY</p>
 *             </dd>
 *             <dt>MACOS</dt>
 *             <dd>
 *                <p>Valid properties: PRODUCT, CLASSIFICATION</p>
 *             </dd>
 *             <dt>ORACLE_LINUX</dt>
 *             <dd>
 *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
 *             </dd>
 *             <dt>REDHAT_ENTERPRISE_LINUX</dt>
 *             <dd>
 *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
 *             </dd>
 *             <dt>SUSE</dt>
 *             <dd>
 *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
 *             </dd>
 *             <dt>UBUNTU</dt>
 *             <dd>
 *                <p>Valid properties: PRODUCT, PRIORITY</p>
 *             </dd>
 *             <dt>WINDOWS</dt>
 *             <dd>
 *                <p>Valid properties: PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, MSRC_SEVERITY</p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchPropertiesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchPropertiesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribePatchPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePatchPropertiesCommandInput} for command's `input` shape.
 * @see {@link DescribePatchPropertiesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePatchPropertiesCommand = /** @class */ (function (_super) {
    __extends(DescribePatchPropertiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePatchPropertiesCommand(input) {
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
    DescribePatchPropertiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribePatchPropertiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePatchPropertiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePatchPropertiesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePatchPropertiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePatchPropertiesCommand(input, context);
    };
    DescribePatchPropertiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePatchPropertiesCommand(output, context);
    };
    return DescribePatchPropertiesCommand;
}($Command));
export { DescribePatchPropertiesCommand };
//# sourceMappingURL=DescribePatchPropertiesCommand.js.map