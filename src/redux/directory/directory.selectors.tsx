import { createSelector } from "reselect";
import { DirectoryState, Section } from "./directory.types";
import { RootState } from "../root-reducer";

const selectDirectory = (state: RootState): DirectoryState => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory: DirectoryState): Section[] => directory.sections
);