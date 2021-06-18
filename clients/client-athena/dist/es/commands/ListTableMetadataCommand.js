import { __extends } from "tslib";
import { ListTableMetadataInput, ListTableMetadataOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListTableMetadataCommand,
  serializeAws_json1_1ListTableMetadataCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the metadata for the tables in the specified data catalog database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListTableMetadataCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListTableMetadataCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListTableMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTableMetadataCommandInput} for command's `input` shape.
 * @see {@link ListTableMetadataCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTableMetadataCommand = /** @class */ (function (_super) {
  __extends(ListTableMetadataCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListTableMetadataCommand(input) {
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
  ListTableMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "ListTableMetadataCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListTableMetadataInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTableMetadataOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListTableMetadataCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListTableMetadataCommand(input, context);
  };
  ListTableMetadataCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListTableMetadataCommand(output, context);
  };
  return ListTableMetadataCommand;
})($Command);
export { ListTableMetadataCommand };
//# sourceMappingURL=ListTableMetadataCommand.js.map
