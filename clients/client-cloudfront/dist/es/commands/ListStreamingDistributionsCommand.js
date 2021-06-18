import { __extends } from "tslib";
import { ListStreamingDistributionsRequest, ListStreamingDistributionsResult } from "../models/models_1";
import {
  deserializeAws_restXmlListStreamingDistributionsCommand,
  serializeAws_restXmlListStreamingDistributionsCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List streaming distributions. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListStreamingDistributionsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListStreamingDistributionsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListStreamingDistributionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamingDistributionsCommandInput} for command's `input` shape.
 * @see {@link ListStreamingDistributionsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStreamingDistributionsCommand = /** @class */ (function (_super) {
  __extends(ListStreamingDistributionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListStreamingDistributionsCommand(input) {
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
  ListStreamingDistributionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "ListStreamingDistributionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListStreamingDistributionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListStreamingDistributionsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListStreamingDistributionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlListStreamingDistributionsCommand(input, context);
  };
  ListStreamingDistributionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlListStreamingDistributionsCommand(output, context);
  };
  return ListStreamingDistributionsCommand;
})($Command);
export { ListStreamingDistributionsCommand };
//# sourceMappingURL=ListStreamingDistributionsCommand.js.map
