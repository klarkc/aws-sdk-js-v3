import { __extends } from "tslib";
import { ListDistributionsRequest, ListDistributionsResult } from "../models/models_1";
import {
  deserializeAws_restXmlListDistributionsCommand,
  serializeAws_restXmlListDistributionsCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List CloudFront distributions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListDistributionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDistributionsCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDistributionsCommand = /** @class */ (function (_super) {
  __extends(ListDistributionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListDistributionsCommand(input) {
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
  ListDistributionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "ListDistributionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListDistributionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDistributionsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListDistributionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlListDistributionsCommand(input, context);
  };
  ListDistributionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlListDistributionsCommand(output, context);
  };
  return ListDistributionsCommand;
})($Command);
export { ListDistributionsCommand };
//# sourceMappingURL=ListDistributionsCommand.js.map
