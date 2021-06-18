import { __extends } from "tslib";
import { ListDataCatalogsInput, ListDataCatalogsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListDataCatalogsCommand,
  serializeAws_json1_1ListDataCatalogsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the data catalogs in the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListDataCatalogsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListDataCatalogsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListDataCatalogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataCatalogsCommandInput} for command's `input` shape.
 * @see {@link ListDataCatalogsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDataCatalogsCommand = /** @class */ (function (_super) {
  __extends(ListDataCatalogsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListDataCatalogsCommand(input) {
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
  ListDataCatalogsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "ListDataCatalogsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListDataCatalogsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListDataCatalogsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListDataCatalogsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListDataCatalogsCommand(input, context);
  };
  ListDataCatalogsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListDataCatalogsCommand(output, context);
  };
  return ListDataCatalogsCommand;
})($Command);
export { ListDataCatalogsCommand };
//# sourceMappingURL=ListDataCatalogsCommand.js.map
