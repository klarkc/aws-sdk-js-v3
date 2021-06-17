import { __extends } from "tslib";
import { DescribeDimensionKeysRequest, DescribeDimensionKeysResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDimensionKeysCommand, serializeAws_json1_1DescribeDimensionKeysCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a
 *       metric.</p>
 *          <note>
 *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
 *         only the first 500 bytes are returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, DescribeDimensionKeysCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, DescribeDimensionKeysCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const command = new DescribeDimensionKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDimensionKeysCommandInput} for command's `input` shape.
 * @see {@link DescribeDimensionKeysCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDimensionKeysCommand = /** @class */ (function (_super) {
    __extends(DescribeDimensionKeysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDimensionKeysCommand(input) {
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
    DescribeDimensionKeysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PIClient";
        var commandName = "DescribeDimensionKeysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDimensionKeysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDimensionKeysResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDimensionKeysCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDimensionKeysCommand(input, context);
    };
    DescribeDimensionKeysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDimensionKeysCommand(output, context);
    };
    return DescribeDimensionKeysCommand;
}($Command));
export { DescribeDimensionKeysCommand };
//# sourceMappingURL=DescribeDimensionKeysCommand.js.map