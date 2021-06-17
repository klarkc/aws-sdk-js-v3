import { __extends } from "tslib";
import { DescribeObjectRequest, DescribeObjectResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeObjectCommand, serializeAws_restJson1DescribeObjectCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the headers for an object at the specified path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, DescribeObjectCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, DescribeObjectCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const command = new DescribeObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeObjectCommandInput} for command's `input` shape.
 * @see {@link DescribeObjectCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeObjectCommand = /** @class */ (function (_super) {
    __extends(DescribeObjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeObjectCommand(input) {
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
    DescribeObjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreDataClient";
        var commandName = "DescribeObjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeObjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeObjectResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeObjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeObjectCommand(input, context);
    };
    DescribeObjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeObjectCommand(output, context);
    };
    return DescribeObjectCommand;
}($Command));
export { DescribeObjectCommand };
//# sourceMappingURL=DescribeObjectCommand.js.map