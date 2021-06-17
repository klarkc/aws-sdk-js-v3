import { __extends } from "tslib";
import { DescribeDomainAutoTunesRequest, DescribeDomainAutoTunesResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeDomainAutoTunesCommand, serializeAws_restJson1DescribeDomainAutoTunesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides scheduled Auto-Tune action details for the Elasticsearch domain, such as Auto-Tune action type, description, severity, and scheduled date.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeDomainAutoTunesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeDomainAutoTunesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeDomainAutoTunesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDomainAutoTunesCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainAutoTunesCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDomainAutoTunesCommand = /** @class */ (function (_super) {
    __extends(DescribeDomainAutoTunesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDomainAutoTunesCommand(input) {
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
    DescribeDomainAutoTunesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DescribeDomainAutoTunesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDomainAutoTunesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDomainAutoTunesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDomainAutoTunesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDomainAutoTunesCommand(input, context);
    };
    DescribeDomainAutoTunesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDomainAutoTunesCommand(output, context);
    };
    return DescribeDomainAutoTunesCommand;
}($Command));
export { DescribeDomainAutoTunesCommand };
//# sourceMappingURL=DescribeDomainAutoTunesCommand.js.map